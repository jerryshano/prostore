import {z} from 'zod';
import {formatNumberWithDecimal} from "@/lib/utils";

const currency = z.string()
  .refine((val) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(val))),
    'price must hace 2 decimal places.')

export const insertProductSchema = z.object({
  name: z.string().min(3, 'name must be at least 3 characters long'),
  slug: z.string().min(3, 'slug must be at least 3 characters long'),
  brand: z.string().min(3, 'brand must be at least 3 characters long'),
  description: z.string().min(3, 'description must be at least 3 characters long'),
  category: z.string().min(3, 'Category must be at least 3 characters long'),
  images: z.array(z.string()).nonempty('At least one image is required'),
  isFeatured: z.boolean().optional(),
  banner: z.string().nullable(),
  stock: z.number().int().nonnegative('Stock must be a non-negative integer'),
  price: currency
})