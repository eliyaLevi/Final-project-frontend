import React, { useEffect, useState } from "react";
import useFetch from "../../componnets/hooks/UseFetch";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export const Edit_terrorist_act = () => {
  const { GETOne, PATCH, data } = useFetch("http://localhost:3001/terror");

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

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    GETOne(id);
  }, []);

  useEffect(() => {
    if (data) {
      setEventid(data.eventid);
      setIyear(data.iyear);
      setImonth(data.imonth);
      setIday(data.iday);
      setCountry_txt(data.country_txt);
      setRegion_txt(data.region_txt);
      setCity(data.city);
      setLatitude(data.latitude);
      setLongitude(data.longitude);
      setAttacktype1_txt(data.attacktype1_txt);
      setTargtype1_txt(data.targtype1_txt);
      setTarget1(data.target1);
      setGname(data.gname);
      setWeaptype1_txt(data.weaptype1_txt);
      setNkill(data.nkill);
      setNwound(data.nwound);
    }
  }, [data]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    PATCH(id, {
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
    alert("האירוע התעדכן בהצלחה");
    // navigate("/");
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
              עדכון מעשה טרור
            </Button>
          </Box>
        </Box>
      </Stack>
    </>
  );
};
