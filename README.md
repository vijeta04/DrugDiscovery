# BIOLOGICAL DATABASE PROJECT - Database of Molecular Descriptors showing drug activity of molecules derived from ChEMBL Database

Molecular descriptors are experimentally-measured or theoretically-derived properties of a molecule. More specifically, they are quantitative representations of physical, chemical or topological characteristics of molecules that summarize our knowledge and understanding of molecular structure and activity from different aspects. 
Molecular fingerprints are property profiles of a molecule, usually in forms of bit or count vectors with the vector elements indicating the existence or the frequencies of certain properties, respectively. Both molecular descriptors and fingerprints play a fundamental role in drug discovery processes. 
The descriptors computed in this project are Lipinski's descriptors (molecular weight, LogP, number of hydrogen bond donors and number of hydrogen bond acceptors) & PaDEL descriptors & fingerprints using the PADEL-Descriptor software.

*FEATURES*
 * A secondary database is created with molecule name , chEMBL ID along with the molecule descriptor and its bioactivity status which has been processed using the data from       chEMBL. 
 * A user-friendly interface is created and queries have been structured to make it easier to access as well as analyze data regarding the various bioactive molecules.

*TOOLS USED*
  * ChEMBL database - 
    It is a manually curated database of bioactive molecules with drug-like properties. It brings together chemical, bioactivity and genomic data to aid the translation of genomic     information into effective new drugs.
  * ChEMBL webresource client - 
    This is the only official Python client library developed and supported by ChEMBL group. The library helps accessing ChEMBL data and cheminformatics tools from Python.
  * Pandas - Open source data analysis and manipulation tool. 
  * Postgres - PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.
  * To develop an interactive user interface/frontend-
      * HTML 
      * CSS 
      * React JS
      * NODE.js 
