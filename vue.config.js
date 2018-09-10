const path = require('path')
const fs = require('fs')

module.exports = {
	devServer : {
		proxy : {
			'/test' : {
				target : {
					protocol : 'https:',
					host : 'localhost',
					port : 8443
					//pfx :  fs.readFileSync(process.env.proxyClientCert),
					//passphrase : process.env.proxyClientCertPassword
					//ca : fs.readFileSync(process.env.proxyServerCA)					
				},
				changeOrigin : true,
				logLevel : 'debug',
			}
		}
	}
}