using AutoMapper;
using JobTracker.API.Models;
using JobTracker.API.DTOs;

namespace JobTracker.API.Profiles;

public class ApplicationProfile : Profile
{
    public ApplicationProfile()
    {
        CreateMap<JobApplication, ApplicationDto>();

        CreateMap<CreateApplicationDto, JobApplication>();
    }
}