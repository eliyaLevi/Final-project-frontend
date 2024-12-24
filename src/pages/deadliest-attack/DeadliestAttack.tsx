import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import useFetch from "../../componnets/hooks/UseFetch";

interface IAttackTypes {
  _id: string;
  total: number;
}

export const DeadliestAttack = () => {
  const { GET, data } = useFetch("http://localhost:3001/terror");

  const [attackType, setAttackType] = useState<IAttackTypes[]>([]);

  useEffect(() => {
    GET("deadliest-attack-types");
  }, []);

  useEffect(() => {
    if (data) {
      setAttackType(data);
    }
  }, [data]);

  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ margin: 10, width: 1500 }}>
          <ResponsiveContainer width="100%" height={700}>
            <BarChart
              data={attackType}
              margin={{
                top: 2,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" stackId="a" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        {/* <Box sx={{ margin: 50, height: 50, width: 50 }}>
          <Casualty_regions />
        </Box> */}
      </Box>
    </Stack>
  );
};
