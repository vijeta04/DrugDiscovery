const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

app.listen(5000, () => {
  console.log("server start on port 5000");
});

//get a molecule's all descriptors
app.get("/molecules/:molecule_chembl_id", async (req, res) => {
  try {
    const { molecule_chembl_id } = req.params;

    const bioactivity = await pool.query(
      "SELECT * from bioactivity WHERE molecule_chembl_id = $1",
      [molecule_chembl_id]
    );
    const lipinski = await pool.query(
      "SELECT * from lipinski WHERE molecule_chembl_id = $1",
      [molecule_chembl_id]
    );
    const pubchem = await pool.query(
      "SELECT * from pubchem WHERE molecule_chembl_id = $1",
      [molecule_chembl_id]
    );
    if(bioactivity.rowCount==0 || lipinski.rowCount==0 || pubchem.rowCount==0)
        res.json({
            success: false
        });
    else
        res.json({
        success: true,
        bioactivity: bioactivity.rows[0],
        lipinski: lipinski.rows[0],
        pubchem: pubchem.rows[0],
        });
  } catch (err) {
    console.error(err.message);
  }
});
