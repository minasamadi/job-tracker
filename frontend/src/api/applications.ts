const API_URL = import.meta.env.VITE_API_URL;

export type Application = {
  id: number;
  jobSource: string;
  applyDate: string;
  postedTime: string | null;
  applicantCount: number | null;

  companyName: string;
  jobTitle: string;
  jobLink: string | null;

  country: string | null;
  city: string | null;
  workMode: string;
  employmentType: string;

  description: string | null;
  requirements: string | null;
  offers: string | null;
  notes: string | null;

  jobPosterName: string | null;
  jobPosterEmail: string | null;
  jobPosterInfo: string | null;

  jobStatus: string;
  viewedDate: string | null;
  responseDate: string | null;
};

export type CreateApplication = Omit<Application, "id">;
export type UpdateApplication = Omit<Application, "id">;

async function handleResponse<T>(response: Response, fallbackMessage: string): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const serverMessage =
      errorData?.detail ||
      errorData?.title ||
      errorData?.message ||
      fallbackMessage;

    throw new Error(serverMessage);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
}

export const getApplications = async (): Promise<Application[]> => {
  const response = await fetch(`${API_URL}/job/applications`);
  return handleResponse<Application[]>(response, "Failed to fetch applications");
};

export const getApplicationById = async (id: number): Promise<Application> => {
  const response = await fetch(`${API_URL}/job/applications/${id}`);
  return handleResponse<Application>(response, "Failed to fetch application details");
};

export const createApplication = async (
  application: CreateApplication
): Promise<Application> => {
  const response = await fetch(`${API_URL}/job/applications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(application),
  });
  return handleResponse<Application>(response, "Failed to create application");
};

export const updateApplication = async (
  id: number,
  application: UpdateApplication
): Promise<Application | void> => {
  const response = await fetch(`${API_URL}/job/applications/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(application),
  });
  return handleResponse<Application | void>(response, "Failed to update application");
};

export const deleteApplication = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/job/applications/${id}`, {
    method: "DELETE",
  });
  return handleResponse<void>(response, "Failed to delete application");
};