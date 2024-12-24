import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import useFetch from "../../componnets/hooks/UseFetch";

interface IAttackTypes {
  _id: string;
  total: number;
}

export const Incident_trends = () => {
  const { GET_INCIDENT_TRENDS_BY_CALL, data } = useFetch(
    "https://final-project-beckend.onrender.com/terror"
  );

  const [attackType, setAttackType] = useState<IAttackTypes[]>([]);
  const [start, setstart] = useState("");
  const [end, setend] = useState("");

  useEffect(() => {
    GET_INCIDENT_TRENDS_BY_CALL();
  }, []);

  useEffect(() => {
    if (data) {
      setAttackType(data);
    }
  }, [data]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    GET_INCIDENT_TRENDS_BY_CALL(start, end);

    setstart("");
    setend("");
  };

  return (
    <>
      <Stack sx={{ marginTop: "10vh" }}>
        <Box
          sx={{
            maxWidth: 400,

            margin: "0 auto",
            mt: 0,
            p: 3,
            border: "1px solid #ccc",
            borderRadius: 2,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            טופס שליחת טווח שנים
          </Typography>
          <TextField
            label="שנה מ-"
            variant="outlined"
            fullWidth
            value={start}
            onChange={(e) => {
              setstart(e.target.value);
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="שנה עד"
            variant="outlined"
            fullWidth
            value={end}
            onChange={(e) => {
              setend(e.target.value);
            }}
            sx={{ mb: 0 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSubmit}
          >
            שלח
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ margin: 10, width: 1500 }}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={attackType}
                margin={{
                  top: 0,
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
        </Box>
      </Stack>
    </>
  );
};
