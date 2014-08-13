
module.exports = {
    
    UserName: {
        type: 'string',
        required: true
    },

    Password: {
        type: 'string',
        required: true
    },

    Remember: 'boolean',

    TEST: {
    	field: {
    		type: 'string',
    		minLength: 2
    	}
    }
};
