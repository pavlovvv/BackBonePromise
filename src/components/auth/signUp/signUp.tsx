import { TextField, InputAdornment, IconButton, OutlinedInput } from "@mui/material"
import styles from "../auth.module.scss"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom"
import logoSrc from "../../../../public/logo-1.svg"
import visabilityIconSrc from "../../../../public/visibility-icon.svg"

interface ISignUpInputvalues {
    email: string;
    password: string;
    showPassword: boolean;
    remember: boolean;
    name: string;
}

export default function SignUp() {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<ISignUpInputvalues>({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
            name: ""
        },
    });

    const [values, setValues] = useState<ISignUpInputvalues>({
        email: "",
        password: "",
        name: "",
        showPassword: false,
        remember: false,
    });

    // const login = useGoogleLogin({
    //     onSuccess: codeResponse => console.log(codeResponse),
    //     flow: 'auth-code',
    // });

    const onSubmit = (data: ISignUpInputvalues) => {
        console.log("Form Data:", data);
    };

    const handleClickShowPassword = () => setValues({ ...values, showPassword: !values.showPassword });


    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return <>
        <div className={`${styles.wrapper} ${styles["wrapper_sign-in"]}`}>
            <section className={`${styles.sign} ${styles.account_in}`}>
                <h1 className={styles.account__heading}>Create account</h1>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.account__item}>
                        <div>
                            <label htmlFor="name" className={styles["account__item-label"]}>Full name</label>
                            <Controller
                                name="name"
                                control={control}
                                rules={{
                                    required: "Full name is required.",
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: "Name can only contain letters and spaces.",
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        placeholder="Enter your name"
                                        variant="outlined"
                                        error={!!errors.name}
                                        helperText={errors.name?.message}
                                        className={`${styles["account__item-texfiled"]}`}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div className={styles.account__item}>
                        <div>
                            <label htmlFor="email" className={styles["account__item-label"]}>Email</label>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email."
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        placeholder="Type here..."
                                        variant="outlined"
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                        className={`${styles["account__item-texfiled"]}`}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div className={styles.account__item}>
                        <div>
                            <label htmlFor="password" className={styles["account__item-label"]} style={{display: 'block', paddingBottom: 10}}>Password</label>
                            <Controller
                                name="password"
                                control={control}
                                rules={{
                                    required: "Password is required.",
                                    pattern: {
                                        value: /^(?=.{8,20}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                                        message:
                                            "Between 8 and 20 chars, with 1 lowercase, 1 uppercase & 1 digit.",
                                    },
                                }}
                                render={({ field }) => (
                                    <OutlinedInput
                                        {...field}
                                        type={values.showPassword ? 'text' : 'password'}
                                        fullWidth
                                        error={!!errors.password}
                                        placeholder={"Create password"}
                                        // slotProps={{
                                        //     background: "#fff", marginTop: "8px", border: "1px solid #C6D4DB", borderRadius: "8px"
                                        // }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    onMouseUp={handleMouseUpPassword}
                                                >
                                                    <img src={values.showPassword ? visabilityIconSrc : visabilityIconSrc} className={styles["account__textfield-icon"]} />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                )}
                            />
                            {errors.password && <span className={styles.error}>{errors.password.message}</span>}
                        </div>
                    </div>

                    <div className={`${styles.account__item} ${styles["account__item-terms"]}`} style={{fontSize: '14px', color: '#92A1A8'}}>
                        Between 8 and 20 characters <br/>
                        1 lowercase letter, 1 uppercase letter, 1 digit
                    </div>

                    <button type="submit" className={styles.account__button} disabled={!isValid} style={{height: 44, background: "#ED805B", color: "#fff"}}>Continue</button>
                </form>

                <div className={styles["account__item-other-option"]}>Already have an account? <Link to={"/"} className={styles["account__item-terms_link"]}>Log in</Link></div>
            </section>

            <div className={styles["circle-1"]}></div>
            <div className={styles["circle-2"]}></div>
            <div className={styles["circle-3"]}></div>
            <div className={styles["circle-4"]}></div>

            <img src={logoSrc} alt="BB promise logo" className={styles["bb-logo"]} />
        </div>
    </>
}