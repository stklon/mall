//起别名
module.exports = {
    configureWebpack:{
        resolve:{
            alias:{//起别名
                'src':'@',
                'assets':'@assets',
                'common':'@common',
                'components':'@components',
                'network':'@network',
                'views':'@views'
            }
        }
    }
}