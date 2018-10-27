const mongoose = require('mongoose');

/**
 * MLab Database Interface
 */
export default class MLabDatabase {

    /**
     * constructor
     * @param string dbname
     * @param string dbuser
     * @param string dbpassword
     * @param string|int port
     * @param string username
     */
    constructor({dbname, dbuser, dbpassword, port, username}) {
        this.connectString = `mongodb://${dbuser}:${dbpassword}@${username}.mlab.com:${port}/${dbname}`;
    }

    /**
     * Attempt to connect online.
     * @returns {MLabDatabase}
     */
    connect() {
       mongoose.connect(this.connectString);
       return this;
    }

    /**
     * Listen on connection opened
     * @param callback
     * @returns {MLabDatabase}
     */
    onOpen(callback) {
        mongoose.connection.once('open', callback);
        return this;
    }
}