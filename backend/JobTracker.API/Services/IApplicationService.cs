using JobTracker.API.DTOs;

namespace JobTracker.API.Services;

public interface IApplicationService
{
    Task<List<ApplicationDto>> GetAllApplications();
    Task<ApplicationDto?> GetApplicationById(int id);
    Task<ApplicationDto> AddApplication(CreateApplicationDto application);
    Task<ApplicationDto?> UpdateApplication(int id, CreateApplicationDto application);
    Task<bool> DeleteApplication(int id);
    Task<List<ApplicationDto>> SearchApplications(string? companyName, string? jobTitle, string? status);

}