using System;
using System.Data;
using System.Data.SqlClient;

namespace CedarGeekWebsite.Support
{
    public static class Connector
    {
        // Building the Connection String:
        // Find the Current Directory Domain and set the Base Sql Statement
        // TODO Change the directory path when transferring to the actual website.
        public static readonly string file = @"C:\Users\Desktop\Documents\Projects\CedarCreek Church\CedarGeekWebsite\CedarGeekWebsite\App_Data\Bank.mdf", sql = "SELECT * FROM ";
        // Build the Connection, itself.
        public static readonly string con = String.Format(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename={0}{1}{0};Integrated Security=True;Connect Timeout=30;", "\"", file);

        private static SqlDataAdapter[] da;

        // Bring the Tables in when calling to build the DataSet
        public static DataSet GetDataSet(string[] TableNames)
        {
            // Generate the Variables
            DataSet ds = new DataSet();
            da = new SqlDataAdapter[TableNames.Length];

            for (int i = 0; i < da.Length; i++)
            {
                // Create and open a connection to the database
                SqlConnection conn = new SqlConnection(con);
                conn.Open();

                // For each TableName, add to the DataSet
                da[i] = new SqlDataAdapter(sql + TableNames[i], conn);
                da[i].Fill(ds, TableNames[i]);

                // Close the connection each time.
                conn.Close();
            }

            return ds;
        }

        public static void UpdateDatabase(DataSet ds, int TableID)
        {
            SqlCommandBuilder cb = new SqlCommandBuilder(da[TableID]);
            cb.DataAdapter.Update(ds.Tables[TableID]);
        }
    }
}
