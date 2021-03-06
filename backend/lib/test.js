const pool = require('../db/pool')

exports.myTest = async (req, res, next) => {
    try {
        const conn = await pool.getConnection()
        let managers = await conn.query('select * from manager')
        await conn.release()
    
        res.send(managers)
    } catch(err) {
        return 'error'
    }
}

exports.getManager = async (req, res, next) => {
    try {
        const conn = await pool.getConnection()
        let manager = await conn.query('select * from manager where id = ?', [req.params.id])
        await conn.release()
    
        res.send(manager[0])
    } catch(err) {
        return 'error'
    }
}