namespace RCMS.webapi.Models
{
    using System;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    public class RegistrationData
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime BirthDate { get; set; }
        public string Gender { get; set; }
        public string StreetAddress1 { get; set; }
        public string StreetAddress2 { get; set; }
        public string State { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string District { get; set; }
        public string Tehsil { get; set; }
        public string Fpsshop { get; set; }
    }

}
