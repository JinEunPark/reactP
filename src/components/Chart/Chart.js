import './Chart.css'
import ChartBar from './ChartBar';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues)//배열을 스프레드 연산자로 다 넣어줌
    
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>(
                <ChartBar
                    key = {dataPoint.label}
                    value = {dataPoint.value}
                    maxValue = {totalMaximum}
                    label = {dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;