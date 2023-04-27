import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional,IsEmail, IsString } from 'class-validator';
export class UserDto {

    @IsString()
    @IsNotEmpty()
    public username:String;
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    public email:String;

    @IsString()
    @IsNotEmpty()
    public password:String;

    @IsString()
    @IsOptional()
    public address:String;
    
    @IsString()
    @IsOptional()
    public phone:String;


}