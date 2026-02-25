export type UploadOptions = {
  endpoint?: string;
  folder?: string;
  onProgress?: (progress: number) => void;
};

export async function uploadFileWithProgress(
  file: File,
  options: UploadOptions = {}
): Promise<string> {
  const endpoint = options.endpoint || "/api/upload-blog-image";
  const data = new FormData();
  data.append("file", file);
  if (options.folder) {
    data.append("folder", options.folder);
  }

  return await new Promise<string>((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("POST", endpoint);

    request.upload.addEventListener("progress", (event) => {
      if (!event.lengthComputable || !options.onProgress) return;
      const progress = Math.round((event.loaded / event.total) * 100);
      options.onProgress(progress);
    });

    request.onreadystatechange = () => {
      if (request.readyState !== XMLHttpRequest.DONE) return;

      if (request.status >= 200 && request.status < 300) {
        try {
          const parsed = JSON.parse(request.responseText) as { url?: string };
          if (!parsed.url) {
            reject(new Error("Upload response missing url"));
            return;
          }
          resolve(parsed.url);
        } catch (error) {
          reject(error);
        }
        return;
      }

      try {
        const parsed = JSON.parse(request.responseText) as { error?: string };
        reject(new Error(parsed.error || "Upload failed"));
      } catch {
        reject(new Error("Upload failed"));
      }
    };

    request.onerror = () => reject(new Error("Network error during upload"));
    request.send(data);
  });
}
