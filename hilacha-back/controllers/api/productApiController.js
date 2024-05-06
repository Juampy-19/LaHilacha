// const { json } = require('sequelize');
// const db = require('../../database/models');
// const sequelize = db.sequelize;

// const productApiController = {

//     'productList': (req, res) => {
//         db.Product.findAll({
//             include: [{ association: "Pizza"}, { association: "Empanada"}]
//         })
//         .then(products => {
//             let response = {
//                 meta: {
//                     status: 200,
//                     total: products.length,
//                     url: 'api/products'
//                 },
//                 data: products
//             }
//             res.json(response);
//         })
//         .catch(error => {
//             console.log('Error fetching products:', error);
//             let response = {
//                 meta: {
//                     status: 500,
//                     error: 'Internal Server Error'
//                 },
//                 data: null
//             };
//             res.status(500).json(response);
//         });
//     }
// }

// module.exports = productApiController;

const { json } = require('sequelize');
const db = require('../../database/models');
const sequelize = db.sequelize;

const productApiController = {

    'productList': (req, res) => {
        db.Product.findAll({
            include: [
                { 
                    association: "Pizza",
                    include: [
                        { 
                            association: "PrecioPizza",
                            include: [{ 
                                association: "TamañoPizza",
                                attributes: ['id']
                         }]
                        }
                    ]
                },
                { 
                    association: "Empanada",
                    include: [{ 
                        association: "PrecioEmpanada",
                        attributes: ['precio']
                     }]
                }
            ]
        })
        .then(products => {
            let response = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: 'api/products'
                },
                data: products
            }
            res.json(response);
        })
        .catch(error => {
            console.log('Error fetching products:', error);
            let response = {
                meta: {
                    status: 500,
                    error: 'Internal Server Error'
                },
                data: null
            };
            res.status(500).json(response);
        });
    }
}

module.exports = productApiController;
