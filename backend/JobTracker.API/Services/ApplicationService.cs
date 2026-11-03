using JobTracker.API.Models;
using JobTracker.API.DTOs;
using AutoMapper;
using System.Runtime.CompilerServices;
using Microsoft.EntityFrameworkCore;
using JobTracker.API.Data;

namespace JobTracker.API.Services;

public class ApplicationService : IApplicationService
{
    private static readonly List<JobApplication> _applications = new List<JobApplication>();
    private readonly IMapper _mapper;
    private readonly AppDbContext _context;

    public ApplicationService(IMapper mapper, AppDbContext context)
    {
        _mapper = mapper;
        _context = context;
    }

    public async Task<List<ApplicationDto>> GetAllApplications()
    {
        var applications = await _context.Applications.ToListAsync();
        return _mapper.Map<List<ApplicationDto>>(applications);
    }

    //  public List<ApplicationDto> GetAllApplications()
    // {
    //     return _mapper.Map<List<ApplicationDto>>(_applications);

    //     // return _applications.Select(a => new ApplicationDto
    //     // {
    //     //     Id = a.Id,
    //     //     JobSource = a.JobSource,
    //     //     ApplyDate = a.ApplyDate,
    //     //     PostedTime = a.PostedTime,
    //     //     ApplicantCount = a.ApplicantCount,
    //     //     CompanyName = a.CompanyName,
    //     //     JobTitle = a.JobTitle,
    //     //     JobLink = a.JobLink,
    //     //     Country = a.Country,
    //     //     City = a.City,
    //     //     WorkMode = a.WorkMode,
    //     //     EmploymentType = a.EmploymentType,
    //     //     Description = a.Description,
    //     //     Requirements = a.Requirements,
    //     //     Offers = a.Offers,
    //     //     Notes = a.Notes,
    //     //     JobPosterName = a.JobPosterName,
    //     //     JobPosterEmail = a.JobPosterEmail,
    //     //     JobPosterInfo = a.JobPosterInfo,
    //     //     JobStatus = a.JobStatus,
    //     //     ViewedDate = a.ViewedDate,
    //     //     ResponseDate = a.ResponseDate
    //     // }
    //     // ).ToList();
    // }


    public async Task<ApplicationDto?> GetApplicationById(int id)
    {
        var app = await _context.Applications.FindAsync(id);
        return _mapper.Map<ApplicationDto>(app);
    }


    // public ApplicationDto? GetApplicationById(int id)
    // {
    //     var app = _applications.FirstOrDefault(a => a.Id == id);
    //     if (app == null)
    //     {
    //         return null;
    //     }

    //     return _mapper.Map<ApplicationDto>(app);
    //     // return new ApplicationDto
    //     // {
    //     //     Id = app.Id,
    //     //     JobSource = app.JobSource,
    //     //     ApplyDate = app.ApplyDate,
    //     //     PostedTime = app.PostedTime,
    //     //     ApplicantCount = app.ApplicantCount,
    //     //     CompanyName = app.CompanyName,
    //     //     JobTitle = app.JobTitle,
    //     //     JobLink = app.JobLink,
    //     //     Country = app.Country,
    //     //     City = app.City,
    //     //     WorkMode = app.WorkMode,
    //     //     EmploymentType = app.EmploymentType,
    //     //     Description = app.Description,
    //     //     Requirements = app.Requirements,
    //     //     Offers = app.Offers,
    //     //     Notes = app.Notes,
    //     //     JobPosterName = app.JobPosterName,
    //     //     JobPosterEmail = app.JobPosterEmail,
    //     //     JobPosterInfo = app.JobPosterInfo,
    //     //     JobStatus = app.JobStatus,
    //     //     ViewedDate = app.ViewedDate,
    //     //     ResponseDate = app.ResponseDate
    //     // };
    // }


    public async Task<ApplicationDto> AddApplication(CreateApplicationDto application)
    {
        var newApplication = _mapper.Map<JobApplication>(application);
        await _context.Applications.AddAsync(newApplication);
        await _context.SaveChangesAsync();
        return _mapper.Map<ApplicationDto>(newApplication);
    }
    // public ApplicationDto AddApplication(CreateApplicationDto application)
    // {

    //     var newApplication = _mapper.Map<JobApplication>(application);
    //     newApplication.Id = _applications.Count > 0 ? _applications.Max(a => a.Id) + 1 : 1;


    //     // int NewId = _applications.Count > 0 ? _applications.Max(a => a.Id) + 1 : 1;

    //     // var newApplication = new JobApplication
    //     // {
    //     //     Id = NewId,
    //     //     JobSource = application.JobSource,
    //     //     ApplyDate = application.ApplyDate,
    //     //     PostedTime = application.PostedTime,
    //     //     ApplicantCount = application.ApplicantCount,
    //     //     CompanyName = application.CompanyName,
    //     //     JobTitle = application.JobTitle,
    //     //     JobLink = application.JobLink,
    //     //     Country = application.Country,
    //     //     City = application.City,
    //     //     WorkMode = application.WorkMode,
    //     //     EmploymentType = application.EmploymentType,
    //     //     Description = application.Description,
    //     //     Requirements = application.Requirements,
    //     //     Offers = application.Offers,
    //     //     Notes = application.Notes,
    //     //     JobPosterName = application.JobPosterName,
    //     //     JobPosterEmail = application.JobPosterEmail,
    //     //     JobPosterInfo = application.JobPosterInfo,
    //     //     JobStatus = application.JobStatus,
    //     //     ViewedDate = application.ViewedDate,
    //     //     ResponseDate = application.ResponseDate
    //     // };

    //     _applications.Add(newApplication);

    //     return _mapper.Map<ApplicationDto>(newApplication);

    //     // return new ApplicationDto
    //     // {
    //     //     Id = newApplication.Id,
    //     //     JobSource = newApplication.JobSource,
    //     //     ApplyDate = newApplication.ApplyDate,
    //     //     PostedTime = newApplication.PostedTime,
    //     //     ApplicantCount = newApplication.ApplicantCount,
    //     //     CompanyName = newApplication.CompanyName,
    //     //     JobTitle = newApplication.JobTitle,
    //     //     JobLink = newApplication.JobLink,
    //     //     Country = newApplication.Country,
    //     //     City = newApplication.City,
    //     //     WorkMode = newApplication.WorkMode,
    //     //     EmploymentType = newApplication.EmploymentType,
    //     //     Description = newApplication.Description,
    //     //     Requirements = newApplication.Requirements,
    //     //     Offers = newApplication.Offers,
    //     //     Notes = newApplication.Notes,
    //     //     JobPosterName = newApplication.JobPosterName,
    //     //     JobPosterEmail = newApplication.JobPosterEmail,
    //     //     JobPosterInfo = newApplication.JobPosterInfo,
    //     //     JobStatus = newApplication.JobStatus,
    //     //     ViewedDate = newApplication.ViewedDate,
    //     //     ResponseDate = newApplication.ResponseDate
    //     // };
    // }


    public async Task<ApplicationDto?> UpdateApplication(int id, CreateApplicationDto updatedApplication)
    {
        var application = await _context.Applications.FindAsync(id);
        if (application == null)
        {
            return null;
        }
        _mapper.Map(updatedApplication, application);
        await _context.SaveChangesAsync();
        return _mapper.Map<ApplicationDto>(application);
    }
    // public ApplicationDto? UpdateApplication(int id, CreateApplicationDto updatedApplication)
    // {
    //     var application = _applications.FirstOrDefault(a => a.Id == id);
    //     if (application == null)
    //     {
    //         return null;
    //     }

    //     _mapper.Map(updatedApplication, application);

    //     return _mapper.Map<ApplicationDto>(application);


    //     // application.JobSource = updatedApplication.JobSource;
    //     // application.ApplyDate = updatedApplication.ApplyDate;
    //     // application.PostedTime = updatedApplication.PostedTime;
    //     // application.ApplicantCount = updatedApplication.ApplicantCount;
    //     // application.CompanyName = updatedApplication.CompanyName;
    //     // application.JobTitle = updatedApplication.JobTitle;
    //     // application.JobLink = updatedApplication.JobLink;
    //     // application.Country = updatedApplication.Country;
    //     // application.City = updatedApplication.City;
    //     // application.WorkMode = updatedApplication.WorkMode;
    //     // application.EmploymentType = updatedApplication.EmploymentType;
    //     // application.Description = updatedApplication.Description;
    //     // application.Requirements = updatedApplication.Requirements;
    //     // application.Offers = updatedApplication.Offers;
    //     // application.Notes = updatedApplication.Notes;
    //     // application.JobPosterName = updatedApplication.JobPosterName;
    //     // application.JobPosterEmail = updatedApplication.JobPosterEmail;
    //     // application.JobPosterInfo = updatedApplication.JobPosterInfo;
    //     // application.JobStatus = updatedApplication.JobStatus;
    //     // application.ViewedDate = updatedApplication.ViewedDate;
    //     // application.ResponseDate = updatedApplication.ResponseDate;
    //     // return new ApplicationDto
    //     // {
    //     //     Id = application.Id,
    //     //     JobSource = application.JobSource,
    //     //     ApplyDate = application.ApplyDate,
    //     //     PostedTime = application.PostedTime,
    //     //     ApplicantCount = application.ApplicantCount,
    //     //     CompanyName = application.CompanyName,
    //     //     JobTitle = application.JobTitle,
    //     //     JobLink = application.JobLink,
    //     //     Country = application.Country,
    //     //     City = application.City,
    //     //     WorkMode = application.WorkMode,
    //     //     EmploymentType = application.EmploymentType,
    //     //     Description = application.Description,
    //     //     Requirements = application.Requirements,
    //     //     Offers = application.Offers,
    //     //     Notes = application.Notes,
    //     //     JobPosterName = application.JobPosterName,
    //     //     JobPosterEmail = application.JobPosterEmail,
    //     //     JobPosterInfo = application.JobPosterInfo,
    //     //     JobStatus = application.JobStatus,
    //     //     ViewedDate = application.ViewedDate,
    //     //     ResponseDate = application.ResponseDate
    //     // };

    // }


    public async Task<bool> DeleteApplication(int id)
    {

        var application = await _context.Applications.FindAsync(id);
        if (application == null)
        {
            return false;
        }

        _context.Applications.Remove(application);
        await _context.SaveChangesAsync();
        return true;
    }


    // public bool DeleteApplication(int id)
    // {
    //     var application = _applications.FirstOrDefault(a => a.Id == id);
    //     if (application == null)
    //     {
    //         return false;
    //     }

    //     _applications.Remove(application);
    //     return true;
    // }

    public async Task<List<ApplicationDto>> SearchApplications(string? companyName, string? jobTitle, string? status)
    {
        var query = _context.Applications.AsQueryable();

        if (!string.IsNullOrWhiteSpace(companyName))
        {
            query = query.Where(a => a.CompanyName.Contains(companyName));
        }

        if (!string.IsNullOrWhiteSpace(jobTitle))
        {
            query = query.Where(a => a.JobTitle.Contains(jobTitle));
        }

        if (!string.IsNullOrWhiteSpace(status))
        {
            query = query.Where(a => a.JobStatus.Contains(status));
        }

        var applications = await query.ToListAsync();
        return _mapper.Map<List<ApplicationDto>>(applications);
    }

    // public List<ApplicationDto> SearchApplications(string? companyName, string? jobTitle, string? status)
    // {
    //     var query = _applications.AsQueryable();

    //     if (!string.IsNullOrWhiteSpace(companyName))
    //     {
    //         query = query.Where(a => a.CompanyName != null && a.CompanyName.Contains(companyName, StringComparison.OrdinalIgnoreCase));
    //     }

    //     if (!string.IsNullOrWhiteSpace(jobTitle))
    //     {
    //         query = query.Where(a => a.JobTitle != null && a.JobTitle.Contains(jobTitle, StringComparison.OrdinalIgnoreCase));
    //     }

    //     if (!string.IsNullOrWhiteSpace(status))
    //     {
    //         query = query.Where(a => a.JobStatus != null && a.JobStatus.Contains(status, StringComparison.OrdinalIgnoreCase));
    //     }


    //     return _mapper.Map<List<ApplicationDto>>(query.ToList());

    //     // return query.Select(a => new ApplicationDto
    //     // {
    //     //     Id = a.Id,
    //     //     JobSource = a.JobSource,
    //     //     ApplyDate = a.ApplyDate,
    //     //     PostedTime = a.PostedTime,
    //     //     ApplicantCount = a.ApplicantCount,
    //     //     CompanyName = a.CompanyName,
    //     //     JobTitle = a.JobTitle,
    //     //     JobLink = a.JobLink,
    //     //     Country = a.Country,
    //     //     City = a.City,
    //     //     WorkMode = a.WorkMode,
    //     //     EmploymentType = a.EmploymentType,
    //     //     Description = a.Description,
    //     //     Requirements = a.Requirements,
    //     //     Offers = a.Offers,
    //     //     Notes = a.Notes,
    //     //     JobPosterName = a.JobPosterName,
    //     //     JobPosterEmail = a.JobPosterEmail,
    //     //     JobPosterInfo = a.JobPosterInfo,
    //     //     JobStatus = a.JobStatus,
    //     //     ViewedDate = a.ViewedDate,
    //     //     ResponseDate = a.ResponseDate
    //     // }).ToList();
    // }

}