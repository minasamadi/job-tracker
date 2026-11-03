using Microsoft.AspNetCore.Mvc;
using JobTracker.API.Services;
using JobTracker.API.DTOs;

namespace JobTracker.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ApplicationsController : ControllerBase
{
    private readonly IApplicationService _applicationService;

    public ApplicationsController(IApplicationService applicationService)
    {
        _applicationService = applicationService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var data = await _applicationService.GetAllApplications();
        return Ok(data);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var application = await _applicationService.GetApplicationById(id);
        if (application == null)
        {
            return NotFound();
        }
        return Ok(application);

    }

    [HttpGet("search")]
    public async Task<IActionResult> Search(string? companyName, string? jobTitle, string? status)
    {
        var results = await _applicationService.SearchApplications(companyName, jobTitle, status);
        return Ok(results);
    }

    [HttpPost]
    public async Task<IActionResult> Add(CreateApplicationDto application)
    {
        var newApplication = await _applicationService.AddApplication(application);
        return CreatedAtAction(nameof(GetById), new { id = newApplication.Id }, newApplication);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, CreateApplicationDto application)
    {
        if (application == null)
        {
            return BadRequest("No DATA!");   // 400
        }

        var updatedApplication = await _applicationService.UpdateApplication(id, application);
        if (updatedApplication == null)
        {
            return NotFound();                           // 404
        }
        return Ok(updatedApplication);                   // 200
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var isDeleted = await _applicationService.DeleteApplication(id);
        if (!isDeleted)
        {
            return NotFound();
        }
        return NoContent();
    }

}