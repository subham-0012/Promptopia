import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
export const revalidate = 0;
export const GET = async (request, {params}) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({creator: params.id}).populate('creator');
        return new Response(JSON.stringify(prompts),{status: 200})
    } catch (error) {
        return new Response(JSON.stringify("Failed to fetch all prompts"),{status: 500})
    }
}