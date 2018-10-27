import mongoose, {Schema} from 'mongoose';

const ExampleSchema = new Schema({
    text: {
        type: String,
        required: true
    }
});

export default mongoose.model('Example', ExampleSchema);