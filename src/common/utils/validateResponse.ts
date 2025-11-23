import type { ZodSchema } from "zod";

export const validateResponse = <T>(data: unknown, schema: ZodSchema<T>) => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
        console.error("Validation error:", parsed.error);
        throw new Error("Invalid server response format");
    }
    return parsed.data;
};
