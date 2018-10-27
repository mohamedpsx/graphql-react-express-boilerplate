import Example from './../models/Example';

export default {
    examples: async (parent, args) => {
        return await Example.find({});
    }
};