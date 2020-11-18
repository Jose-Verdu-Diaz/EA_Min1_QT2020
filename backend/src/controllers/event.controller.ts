import {Request, Response} from 'express';
import Event from '../models/event';

const getEvents = async (req: Request, res: Response) => {
    try{
        const results = await Event.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

function newEvent (req: Request, res: Response): void {
    let event = new Event({
        "name" : req.body.name,
        "date" : req.body.date,
    });
    event.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) =>{
        return res.status(500).json(err);
    })
}

export default {getEvents, newEvent}
