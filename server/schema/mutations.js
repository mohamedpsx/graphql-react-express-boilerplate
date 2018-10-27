import Example from './../models/Example';

export default {
    createExample: async (parent, args) => {
        return await (new Example(args)).save();
    }
};