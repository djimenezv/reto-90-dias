import sql from 'mssql';

const sqlConfig = {
    user: 'sa',
    password: 'Colombia$2021',
    database: 'ninety-days-plan',
    server: 'localhost',
    port: 1433,
    dialect: "mssql",
    dialectOptions: {
        "instanceName": "SQLEXPRESS"
    },
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: false, // true for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }

export const getUser = async (userEmail) => {

    await sql.connect(sqlConfig)
    const result = await sql.query`select * from tbl_user where email = ${userEmail}`
    return result;

}

export const createUser = async (profile) => {

    await sql.connect(sqlConfig)
    const query = `insert into tbl_user (email, displayname, picture) values ('${profile.email}', '${profile.displayName}', '${profile.picture}')`;
    const result = await sql.query(query);
    return result;

}

export const getOrCreateUser = async (userProfile) => {

    const user = await getUser(userProfile.email);
    const result = user.recordset.length
                        ? user 
                        : await createUser(userProfile);
    return result;

}