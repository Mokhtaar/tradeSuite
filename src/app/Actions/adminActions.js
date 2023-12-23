
import prisma from "../../../lib/prisma";

export  async function Update(){
    try {
            
          "use server"
                await prisma.user.update({
                    where: { email: "anoor541@gmail.com" },
                    data: { status: 'nn' }, 
                });
              
                console.log("User status updated successfully");
            } catch (error) {
                console.error("Error updating user status:", error);
          
            }
    
  }
