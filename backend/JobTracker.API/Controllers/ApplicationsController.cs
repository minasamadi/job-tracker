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
    public IActionResult GetAll()
    {
        var data = _applicationService.GetAllApplications();
        return Ok(data);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var application = _applicationService.GetApplicationById(id);
        if (application == null)
        {
            return NotFound();
        }
        return Ok(application);

    }

    [HttpGet("search")]
    public IActionResult Search(string? companyName, string? jobTitle, string? status)
    {
        var results = _applicationService.SearchApplications(companyName, jobTitle, status);
        return Ok(results);
    }

    [HttpPost]
    public IActionResult Add(CreateApplicationDto application)
    {
        var newApplication = _applicationService.AddApplication(application);
        return CreatedAtAction(nameof(GetById), new { id = newApplication.Id }, newApplication);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, CreateApplicationDto application)
    {
        if (application == null)
        {
            return BadRequest("No DATA!");   // 400
        }

        var updatedApplication = _applicationService.UpdateApplication(id, application);
        if (updatedApplication == null)
        {
            return NotFound();                           // 404
        }
        return Ok(updatedApplication);                   // 200
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var isDeleted = _applicationService.DeleteApplication(id);
        if (!isDeleted)
        {
            return NotFound();
        }
        return NoContent();
    }

}