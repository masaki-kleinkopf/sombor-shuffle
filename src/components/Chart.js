import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../styles/Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ stats }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Points - Rebounds - Assists",
      },
    },
  };
  const labels = stats.map((stat) => stat.date);
  const data = {
    labels,
    datasets: [
      {
        label: "Points",
        data: stats.map((stat) => stat.points),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Rebounds",
        data: stats.map((stat) => stat.rebounds),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Assists",
        data: stats.map((stat) => stat.assists),
        borderColor: "rgb(70, 30, 50))",
        backgroundColor: "rgba(70, 30, 50, 0.5)",
      },
    ],
  };
  return (
    <div className="chart">
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
