import {connection} from '../database/connection.js'
import {animes} from '../model/animes.js';

let message = '';
let type = '';

export const getIndex = async (req, res) => {
    try {
        setTimeout(() => {
            message = ''
            type = ''
        }, 1000)

        const listAnimes = await animes.findAll({order: [['id', 'ASC']]})
        res.render('index.ejs', {
            listAnimes,
            message,
            type
        })
    }
    catch(error){
        res.send(error.message)
    }
};

export const getDetalhes = async (req, res) => {

    try {
        const detalhesAnimes = await animes.findByPk(req.params.id)
        res.render('detalhes.ejs', {
            detalhesAnimes
        })
    }
    catch(error) {
        res.send(error.message)
    }
};
export const getCriar = async (req, res) => {
    try {
        res.render('criar.ejs', {
            message,
            type
        })
    }
    catch(error) {
        res.send(error.message)
    }

}

export const postCriar = async (req, res) => {
    const {nome, genero, autor, temporadas, episodios, img, iframe, lancamento, sinopse} = req.body
    let toggle = false
    try {
        if(!nome || !genero || !autor || !temporadas || !episodios || !img || !iframe || !lancamento || !sinopse){
            message = 'Todos os os campos são necessários!';
            type = 'danger'; 
            res.render('criar.ejs')
        } else {
            await animes.create({nome, genero, autor, temporadas, episodios, img, iframe, lancamento, sinopse}) 
            message = 'Novo Anime criado com sucesso!';
            type = 'success';   
            res.redirect('/')
            }
    }
    catch(error){
        res.send(error.message)
    }
}

export const getDeletar = async (req, res) => {
    try {
        await animes.destroy({
            where: {
                id: req.params.id
            }
        })
        message = 'Anime excluído com sucesso!';
        type = 'success'; 
        res.redirect('/')
    }
    catch(error) {
        res.send(error.message)
    }
}

export const getEditar = async (req, res) => {
    try{
        const animeAtual = await animes.findByPk(req.params.id)
        res.render('editar.ejs', {
            animeAtual,
            message,
            type
        })
    }
    catch(error){
        res.send(error.message)
    }
}

export const postEditar = async (req, res) => {
    try {
    const {nome, genero, autor, temporadas, episodios, img, iframe, lancamento, sinopse} = req.body
        await animes.update({
            nome: nome,
            genero: genero,
            autor: autor,
            temporadas: temporadas,
            episodios: episodios,
            img: img,
            iframe: iframe,
            lancamento: lancamento,
            sinopse: sinopse
        }, {
            where: {
                id: req.params.id
            }
        })
        message = 'Anime editado com sucesso!';
        type = 'success'; 
        res.redirect('/')
    }
    catch(error) {
        res.send(error.message)
    }
}