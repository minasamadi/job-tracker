using JobTracker.API.DTOs;

namespace JobTracker.API.Services;

public interface IApplicationService
{
    List<ApplicationDto> GetAllApplications();
    ApplicationDto? GetApplicationById(int id);
    ApplicationDto AddApplication(CreateApplicationDto application);
    ApplicationDto? UpdateApplication(int id, CreateApplicationDto application);
    bool DeleteApplication(int id);
    List<ApplicationDto> SearchApplications(string? companyName, string? jobTitle, string? status);

}