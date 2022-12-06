import { solutions} from '../../../data/solutions'

export default function handler(req, res){
    if (req.method === 'GET') {
    res.status(200).json(solutions)
    } else if (req.method === 'POST') {
        const solution = req.body.solution
        const newSolution = {
            id: Date.now(),
            text: solution
        }
        solutions.push(newSolution)
        res.status(201).json(newSolution)
     }   
}


