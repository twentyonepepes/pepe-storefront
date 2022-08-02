import proxy from 'express-http-proxy';
import express from "express";
import cors from 'cors';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import getPort from 'get-port';

import { urlencoded, json } from 'body-parser';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { path } from 'app-root-path';

import clientWebpackConfig from '../../webpack.config.js'; 

const app = new express();
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());

(async function(){

    const PORT = process.env.PORT || await getPort({port:7778});

    app.listen(PORT, ()=>{
    
        console.info(`INFO: Application listening on port ${PORT}.`);
    
        if (!process.env.PRODUCTION) {
    
            console.info(`http://localhost:${PORT}`);
        }
    
    });

})();


if (process.env.NODE_ENV !== "production") {

    console.info("Using live generation of client code");
    
    const bundler = webpack(clientWebpackConfig())
    app.use(webpackDevMiddleware(bundler));    

} else {

    console.info("Using prebuilt client code for production");
    app.use('/client.js', express.static("bin/client.js"));

}

app.use('/imagex', proxy(process.env.IMAGE_SERVER_URL));
app.use('/productx', proxy(process.env.PRODUCT_SERVER_URL));

app.use('/main.css', express.static("bin/main.css"));

app.use('/',(req,res)=>{

    let html = readFileSync(resolve(path, "public", "index.html"), "utf-8");
    res.send(html);

});

