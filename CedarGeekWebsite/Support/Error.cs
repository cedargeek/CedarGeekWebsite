/// Notice: If Email Password Changes, Update this on line 16.
/// Error Types are at the very bottom of this file. Add types to this Enumeration.
/// When adding to the list of ErrorTypes, update the cases in the switch on line 82.

using System;
using System.IO;
using System.Net.Mail;
using System.Runtime.CompilerServices;

namespace CedarGeekWebsite.Support
{
    public static class Error
    {
        private static readonly string emailPW = "FilthyScoundrel222";
        private static ErrorType tempError;
        private static string Msg;
        private static string ErrFileName(string errortype)
        {
            string errFile = "";
            errFile += DateTime.Today.Year.ToString();                  // YYYY
            errFile += DateTime.Today.Month.ToString().PadLeft(2, '0'); // YYYYMM
            errFile += DateTime.Today.Day.ToString().PadLeft(2, '0');   // YYYYMMDD
            errFile += "-";                                             // YYYYMMDD-
            errFile += DateTime.Now.Hour.ToString().PadLeft(2, '0');    // YYYYMMDD-HH
            errFile += DateTime.Now.Minute.ToString().PadLeft(2, '0');  // YYYYMMDD-HHMM
            errFile += DateTime.Now.Second.ToString().PadLeft(2, '0');  // YYYYMMDD-HHMMSS

            errFile += "-";                                             // YYYYMMDD-HHMMSS-
            errFile += errortype.Replace(" ", "_");                     // YYYYMMDD-HHMMSS-Error_Type

            errFile += ".txt";                                          // YYYYMMDD-HHMMSS-Error_Type.txt
            return errFile;
        } // Name the Error File
        private static bool SendEmail(string attFile, string subject, string body)
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
                mail.From = new MailAddress("pragmassist@gmail.com");
                mail.To.Add("cbrickner@pragmassist.com");
                mail.Subject = subject;
                mail.Body = body;

                Attachment attachment;
                attachment = new Attachment(attFile);
                mail.Attachments.Add(attachment);

                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential("pragmassist@gmail.com", emailPW);
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);
                return true;
            }
            catch (Exception)
            { // If anything at all goes wrong, notify the user.
                return false;
            }
        } // Send the email error to myself
        private static string LogError(string path, string name, int line)
        {
            string divider = " .:. ";
            string[] details = new string[]
            {
                "Remember that the FileName is Date - Time - User",                 // 0 is a reminder on how to read the file name
                String.Format("{0}{1}{0}", divider, path),                          // 1 tells me the FilePath that called the error
                String.Format("{0}Method Name = {1}{0}", divider, name),            // 2 tells me the Method that called the error
                String.Format("{0}Line Number = {1}{0}", divider, line.ToString()), // 3 tells me where to find the problem.
                "",                                                                 // 4 will tell me where it went wrong
                "",                                                                 // 5 will tell me what the user saw (for empathizing)
                "",                                                                 // 6 becomes the Email Subject
                                                                                    // 7 becomes the Email Message Body
                "Chris, Please investigate the attached error at your earliest convenience. A user had a problem with your program."
            }; // Each line in the file should look like this: " .:. Line Number 5 .:. "
            Msg = "We are terribly sorry, but ";

            // Set all the details base on which error is being called
            switch (tempError)
            {
                case ErrorType.Access:
                    return "Access Denied: You do not have the proper Security Clearance";
                case ErrorType.Connection:
                    details[4] = divider + "Could not connect to the database." + divider;
                    details[5] = divider + "This user did not see anything, other than the fact that the user does not exist. " +
                        "If he/she was trying to register, registration failed. If he/she was trying to login, login failed." + divider;
                    Msg += "there has been an error while trying to connect to the database.";
                    details[6] = "Database Connection Error";
                    break;
                case ErrorType.Conversion:
                    details[4] = divider + "Failed to convert from a member to or from the database." + divider;
                    Msg += "the login attempt failed due to an error on our end.";
                    details[6] = "Data Conversion Error";
                    break;
                case ErrorType.Decryption:
                    details[4] = divider + "Failed to read and decrypt the file." + divider;
                    Msg += "there seems to be an error decrypting the file. Don't worry: This means the security is strong.";
                    details[6] = "File Decryption Error";
                    break;
                case ErrorType.Encryption:
                    details[4] = divider + "Failed to encrypt the file." + divider;
                    Msg += "there seems to be an error decrypting the file. Don't worry: This means the old version is still valid.";
                    details[6] = "File Encryption Error";
                    break;
                case ErrorType.MissingFile:
                    details[4] = divider + "Failed to locate the file." + divider;
                    Msg += "there seems to be an error locating the file.";
                    details[6] = "Missing File";
                    break;
                case ErrorType.Update:
                    details[4] = divider + "Failed to update the database." + divider;
                    Msg += "there was a minor error while saving your information. The database has not been updated.";
                    details[6] = "Database Update Error";
                    break;
                default:
                    details[4] = "CRITICAL ERROR!";
                    Msg += "We have reached a unique situation where we don't yet know what went wrong. It will be our top priority to resolve this issue.";
                    details[6] = "UNKNOWN ERROR!";
                    break;
            }

            // Finish off the return message.
            Msg += " An email has been sent to the administrator, and you will be notified when the issue is resolved. Thank you for your patience, and we sincerely apologize for the inconvenience.";
            details[5] = "This user saw: " + Msg;


            // If the directory does not exist, Create it.
            string dir = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Errors");
            if (!Directory.Exists(dir))
            { Directory.CreateDirectory(dir); }

            // Create the FilePath
            string err = Path.Combine(dir, ErrFileName(details[6]));

            // Write the File
            using (StreamWriter w = new StreamWriter(err))
            {
                for (int i = 0; i < details.Length; i++)
                { w.WriteLine(details[i]); }
            }

            // If sending fails, notify the user on how to resolve the issue.
            if (!SendEmail(err, details[6], details[7]))
            { return "Email failed to send. Please contact Support at pragmassist@gmail.com to resolve this issue. We sincerely apologize for the inconvenience and thank you for your patience."; }

            // Otherwise, let them know it will be resolved shortly.
            return Msg;
        } // Write to File

        // Example of the following line: Console.WriteLine(Error.Summon(ErrorType.Connection))
        public static string Summon(ErrorType type, [CallerFilePath] string inPath = "", [CallerMemberName] string inName = "", [CallerLineNumber] int inLine = 0)
        {
            tempError = type;
            LogError(inPath, inName, inLine);

            return Msg;
        }
    }
    public enum ErrorType
    {
        Access,
        Connection,
        Conversion,
        Decryption,
        Encryption,
        MissingFile,
        Unknown,
        Update
    }
}
