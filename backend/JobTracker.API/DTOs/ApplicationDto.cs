namespace JobTracker.API.DTOs;

public class ApplicationDto
{
    public int Id { get; set; }

    // --- Application Info ---
    public string JobSource { get; set; } = string.Empty;
    public DateTime ApplyDate { get; set; }
    public string? PostedTime { get; set; }
    public int? ApplicantCount { get; set; }

    // --- Job Details ---
    public string CompanyName { get; set; } = string.Empty;
    public string JobTitle { get; set; } = string.Empty;
    public string? JobLink { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public string WorkMode { get; set; } = string.Empty;
    public string EmploymentType { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? Requirements { get; set; }
    public string? Offers { get; set; }
    public string? Notes { get; set; }
    public string? JobPosterName { get; set; }
    public string? JobPosterEmail { get; set; }
    public string? JobPosterInfo { get; set; }

    // --- Application Status ---
    public string JobStatus { get; set; } = string.Empty;
    public DateTime? ViewedDate { get; set; }
    public DateTime? ResponseDate { get; set; }
}