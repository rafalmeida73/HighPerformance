


module.exports = {
    index: (req, res)=>{
		res.render("index");
    },
    
    sobre: (req, res)=>{
		res.render("sobre");
    },
    login: (req, res)=>{
		res.render("login");
    },
    cadastro: (req, res)=>{
		res.render("cadastro");
    },
}