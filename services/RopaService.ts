import { Ropa } from "@/types/Ropa";

const API_URL = "https://6929de1b9d311cddf34b821a.mockapi.io/Ropa";

async function check(res: Response) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Error en la petición");
  }
  return res.json();
}

export const ropaService = {
  
  async getAll(): Promise<Ropa[]> {
    const res = await fetch(API_URL, { cache: "no-store" });
    return check(res);
  },

  
  async getById(id: string): Promise<Ropa> {
    const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
    return check(res);
  },
};
