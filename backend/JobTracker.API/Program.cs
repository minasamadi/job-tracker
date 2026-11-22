using JobTracker.API.Profiles;
using JobTracker.API.Services;
using Microsoft.EntityFrameworkCore;
using JobTracker.API.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

//Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddScoped<IApplicationService, ApplicationService>();

builder.Services.AddAutoMapper(typeof(ApplicationProfile));

// ۱. ساخت مسیر کامل فیزیکی پوشه Data در پروژه
string dataPath = Path.Combine(builder.Environment.ContentRootPath, "Data");
if (!Directory.Exists(dataPath))
{
    Directory.CreateDirectory(dataPath);
}

// ۲. ساخت مسیر کامل فایل mdf
string mdfFilePath = Path.Combine(dataPath, "JobTrackerDb.mdf");

// ۳. خواندن ConnectionString و اضافه کردن مسیر دقیق فایل
string rawConnectionString = builder.Configuration.GetConnectionString("DefaultConnection")!;
string finalConnectionString = $"{rawConnectionString};AttachDbFilename={mdfFilePath}";

// ۴. ثبت DbContext با Connection String نهایی
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(finalConnectionString));


builder.Services.AddCors(options =>
{
options.AddPolicy("AllowVite", policy =>
{
    policy.WithOrigins("http://localhost:5173")
          .AllowAnyHeader()
          .AllowAnyMethod();
});
});

builder.Services.AddProblemDetails();

var app = builder.Build();

app.UseExceptionHandler();


// فعال‌سازی Swagger فقط در محیط Development برای حفظ امنیت
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();

app.UseCors("AllowVite");

app.UseAuthorization();

app.MapControllers();

app.Run();
