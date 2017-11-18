var express = require('express');
const array = [6, 7, 8];
module.exports = {
    getArray2: (req, res, next)=>{
        res.send(array);
    },
    postArray: (req, res, next)=>{
        array2.push(req.body.id);
        res.send({ array:array});
    }
}