using System.ComponentModel.DataAnnotations;

namespace JobTracker.API.Models;

public class JobApplication
{
    public int Id { get; set; }

    // --- Application Info ---
    public string JobSource { get; set; } = string.Empty;

    [Required(ErrorMessage = "Apply date is required")]
    public DateTime ApplyDate { get; set; }

    public string? PostedTime { get; set; }
    public int? ApplicantCount { get; set; }

    // --- Job Details ---
    [Required(ErrorMessage = "Company name is required")]
    [StringLength(100)]
    public string CompanyName { get; set; } = string.Empty;

    [Required(ErrorMessage = "Job title is required")]
    [StringLength(100)]
    public string JobTitle { get; set; } = string.Empty;

    [Url(ErrorMessage = "Job link is not a valid URL")]
    public string? JobLink { get; set; }

    public string? Country { get; set; }
    public string? City { get; set; }
    public string WorkMode { get; set; } = "not-specified";
    public string EmploymentType { get; set; } = "not-specified";
    public string? Description { get; set; }
    public string? Requirements { get; set; }
    public string? Offers { get; set; }
    public string? Notes { get; set; }
    public string? JobPosterName { get; set; }

    [EmailAddress(ErrorMessage = "Job poster email is not valid")]
    public string? JobPosterEmail { get; set; }

    public string? JobPosterInfo { get; set; }

    // --- Application Status ---
    public string JobStatus { get; set; } = "Applied";
    public DateTime? ViewedDate { get; set; }
    public DateTime? ResponseDate { get; set; }
}