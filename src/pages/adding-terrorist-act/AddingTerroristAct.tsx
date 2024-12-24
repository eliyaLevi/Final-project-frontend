import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useFetch from "../../componnets/hooks/UseFetch";

export const AddingTerroristAct = () => {
  const { POST, data } = useFetch("http://localhost:3001");

  const [eventid, setEventid] = useState(0);
  const [iyear, setIyear] = useState(0);
  const [imonth, setImonth] = useState(0);
  const [iday, setIday] = useState(0);
  const [country_txt, setCountry_txt] = useState("");
  const [region_txt, setRegion_txt] = useState("");
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(15.478598);
  const [longitude, setLongitude] = useState(120.599741);
  const [attacktype1_txt, setAttacktype1_txt] = useState("");
  const [targtype1_txt, setTargtype1_txt] = useState("");
  const [target1, setTarget1] = useState("");
  const [gname, setGname] = useState("");
  const [weaptype1_txt, setWeaptype1_txt] = useState("");
  const [nkill, setNkill] = useState(0);
  const [nwound, setNwound] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    POST("terror", {
      eventid,
      iyear,
      imonth,
      iday,
      country_txt,
      region_txt,
      city,
      latitude,
      longitude,
      attacktype1_txt,
      targtype1_txt,
      target1,
      gname,
      weaptype1_txt,
      nkill,
      nwound,
    });
    setEventid(0);
    setIyear(0);
    setImonth(0);
    setIday(0);
    setCountry_txt("");
    setRegion_txt("");
    setCity("");
    setLatitude(15.478598);
    setLongitude(120.599741);
    setAttacktype1_txt("");
    setTargtype1_txt("");
    setTarget1("");
    setGname("");
    setWeaptype1_txt("");
    setNkill(0);
    setNwound(0);
    alert("התווסף בהצלחה מקווים שלא יהיו עוד מקרים כאלו");
  };
  return (
    <>
      <Stack sx={{ marginTop: 15 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            maxWidth: 1400,
            mt: 0,
            p: 3,
            border: "1px solid #ccc",
            borderRadius: 2,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              טרור פוגע בחפים מפשע. 🚫💔
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <TextField
              label="מספר זיהוי אירוע בת 12 ספרות"
              fullWidth
              value={eventid}
              onChange={(e) => {
                setEventid(Number(e.target.value));
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="שנה שאירע בה האירוע"
              fullWidth
              value={iyear}
              onChange={(e) => {
                setIyear(Number(e.target.value));
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="חודש שאירע בה האירוע"
              fullWidth
              value={imonth}
              onChange={(e) => {
                setImonth(Number(e.target.value));
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="יום שאירע בה האירוע"
              fullWidth
              value={iday}
              onChange={(e) => {
                setIday(Number(e.target.value));
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="שם המדינה שבה אירע האירוע"
              fullWidth
              value={country_txt}
              onChange={(e) => {
                setCountry_txt(e.target.value);
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="האיזור במדינה באירע באירוע"
              fullWidth
              value={region_txt}
              onChange={(e) => {
                setRegion_txt(e.target.value);
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="שם העיר שאירע האירוע"
              fullWidth
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="קו אורך"
              fullWidth
              value={latitude}
              onChange={(e) => {
                setLatitude(Number(e.target.value));
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="קו רוחב"
              fullWidth
              value={longitude}
              onChange={(e) => {
                setLongitude(Number(e.target.value));
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="סוג התקיפה"
              fullWidth
              value={attacktype1_txt}
              onChange={(e) => {
                setAttacktype1_txt(e.target.value);
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="סוג המטרה שהותקפה"
              fullWidth
              value={targtype1_txt}
              onChange={(e) => {
                setTargtype1_txt(e.target.value);
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="מטרה ספציפית שהותקפה"
              fullWidth
              value={target1}
              onChange={(e) => {
                setTarget1(e.target.value);
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="שם הארגון המפגע"
              fullWidth
              value={gname}
              onChange={(e) => {
                setGname(e.target.value);
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="סוג הנשק ששימש באירוע"
              fullWidth
              value={weaptype1_txt}
              onChange={(e) => {
                setWeaptype1_txt(e.target.value);
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="מספר ההרוגים"
              fullWidth
              value={nkill}
              onChange={(e) => {
                setNkill(Number(e.target.value));
              }}
              sx={{ width: 300, margin: 3 }}
            />
            <TextField
              label="מספר הפצועים"
              fullWidth
              value={nwound}
              onChange={(e) => {
                setNwound(Number(e.target.value));
              }}
              sx={{ width: 300, margin: 3 }}
            />
          </Box>
          <Box>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              הוספת מעשה טרור
            </Button>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

// eventid?: number; //מספר זיהוי אירוע בת 12 ספרות
// iyear?: number; //שנה שאירע האירוע
// imonth?: number; // חודש שאירע האירוע
// iday?: number; // יום שאירע האירוע
// country_txt?: string; // שם המדינה שאירע האירוע
// region_txt?: string; // האיזור במדינה שאירע האירוע
// city?: string; // שם העיר שאירע האירוע
// latitude?: number; // קו אורך
// longitude?: number; // קו רוחב
// attacktype1_txt?: string; // סוג התקיפה לדוגמא התנקשות
// targtype1_txt?: string; // סוג המטרה שהותקפה כגון אזרחים או רכוש
// target1?: string; // מטרה ספציפית שהותקפה
// gname?: string; // שם הקבוצה האחראית על האירוע
// weaptype1_txt?: string; // סוג הנשק ששימש באירוע
// nkill?: number; // מספר ההרוגים באירוע
// nwound?: number; // מספר הפצועים באירוע
