const path = require('path')
const fs = require('fs')

module.exports = {
	devServer : {
		https : true,
//		pfx : fs.readFileSync(process.env.proxyServerCert),
//		pfxPassphrase : process.env.proxyServerCertPassword,
//		ca : fs.readFileSync(process.env.proxyServerCA),
//		requestCert : false,		
		
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