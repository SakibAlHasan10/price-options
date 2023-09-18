import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const Linechart = () => {
    const students = [
        {"id": 1, "name": "Student 1", "math_mark": 85, "physics_mark": 75, "biology_mark": 90},
        {"id": 2, "name": "Student 2", "math_mark": 78, "physics_mark": 82, "biology_mark": 88},
        {"id": 3, "name": "Student 3", "math_mark": 92, "physics_mark": 88, "biology_mark": 94},
        {"id": 4, "name": "Student 4", "math_mark": 68, "physics_mark": 72, "biology_mark": 78},
        {"id": 5, "name": "Student 5", "math_mark": 75, "physics_mark": 80, "biology_mark": 85},
        {"id": 6, "name": "Student 6", "math_mark": 88, "physics_mark": 90, "biology_mark": 92},
        {"id": 7, "name": "Student 7", "math_mark": 72, "physics_mark": 78, "biology_mark": 85},
        {"id": 8, "name": "Student 8", "math_mark": 96, "physics_mark": 92, "biology_mark": 98},
        {"id": 9, "name": "Student 9", "math_mark": 81, "physics_mark": 85, "biology_mark": 90},
        {"id": 10, "name": "Student 10", "math_mark": 89, "physics_mark": 87, "biology_mark": 92}
    ]
    return (
        <div>
            <LChart width={1100} height={400} data={students}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math_mark' stroke='red'></Line>
                <Line dataKey="physics_mark" stroke='green'></Line>
                <Line dataKey="biology_mark" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default Linechart;