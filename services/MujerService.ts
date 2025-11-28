import { Mujer } from "@/types/Mujer";

// URL del MockAPI
const API_URL = "https://6929fdbd9d311cddf34bccb3.mockapi.io/RopaMujeres";

const check = async (res: Response) => {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Error en la petición");
  }
  return res.json();
};

export const mujerService = {
  // GET ALL
  async getAll(): Promise<Mujer[]> {
    const res = await fetch(API_URL, { cache: "no-store" });
    return check(res);
  },

  // GET BY ID
  async getById(id: string): Promise<Mujer> {
    const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
    return check(res);
  },

  // CREATE
  async create(data: Omit<Mujer, "id">): Promise<Mujer> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return check(res);
  },

  // UPDATE
  async update(id: string, data: Partial<Mujer>): Promise<Mujer> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return check(res);
  },

  // DELETE
  async remove(id: string): Promise<void> {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  },
};
