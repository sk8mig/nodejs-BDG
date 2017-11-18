var express = require('express');
const array = [1, 2, 3];
const obj = {};
const tvShows = [
    {
        id:1,
        titulo: "shit",
        anio: 2017,
        pais: "USA"
    },
    {
        id:2,
        titulo: "shit",
        anio: 2016,
        pais: "USA"
    }
];

obj.getArray = (req, res, next)=>{
    res.send(tvShows);
};

obj.postArray = (req, res, next)=>{
    tvShows.push(req.body);

    res.send(tvShows);
};

obj.updateArray = (req, res, next)=>{
    let tvFind = tvShows.findIndex(tvShow => tvShow.id ==  req.params.id);
    
    if(tvFind<0 || tvFind< -1)
        return  res.send({Error: 'Error indice no existe ' +  req.params.id });
    if(tvShows[tvFind].id != req.body.id)
        return  res.send({Error: 'Id diferente ' +  req.params.id + ' -> ' + req.body.id });    
    tvShows[tvFind] =  req.body;   
    res.send(tvShows);
};

obj.getById = (req, res, next)=>{
    let tvFind = tvShows.find(tvShow => tvShow.id ==  req.params.id);
    if(!tvFind)
        return  res.send({Error: 'Error moder' +  req.params.id });
    res.send(tvFind);
};

obj.deleteById = (req, res, next)=>{
    let tvFind = tvShows.findIndex(tvShow => tvShow.id ==  req.params.id);
    
    if(tvFind<0)
        return  res.send({Error: 'Error indice no existe ' +  req.params.id });
    let result = tvShows.splice(tvFind,1);   
    res.send(result);
};

const buildTVShow = (id, body) => {
    return: {
        id: body.id,
        anio:body.anio,
        pais: body.pais
    }
}

module.exports = obj;