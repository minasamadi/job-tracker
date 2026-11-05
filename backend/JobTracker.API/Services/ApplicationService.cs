using JobTracker.API.Models;
using JobTracker.API.DTOs;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using JobTracker.API.Data;

namespace JobTracker.API.Services;

public class ApplicationService : IApplicationService
{
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


    public async Task<ApplicationDto?> GetApplicationById(int id)
    {
        var app = await _context.Applications.FindAsync(id);
        return _mapper.Map<ApplicationDto>(app);
    }



    public async Task<ApplicationDto> AddApplication(CreateApplicationDto application)
    {
        var newApplication = _mapper.Map<JobApplication>(application);
        await _context.Applications.AddAsync(newApplication);
        await _context.SaveChangesAsync();
        return _mapper.Map<ApplicationDto>(newApplication);
    }


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

}