import mongoose, { Schema, Document} from 'mongoose';

export interface IEvent extends Document {
    name: string;
    date: string;
}

const eventSchema = new Schema({
    name: {type: String},
    date: {type: String}
});

export default mongoose.model<IEvent>('Event', eventSchema);