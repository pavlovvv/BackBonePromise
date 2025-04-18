import { TextField, InputAdornment, IconButton, OutlinedInput } from "@mui/material"
import styles from "../auth.module.scss"
import { useState } from "react"
// import visabilityOff from "@public/visability-off.png"
// import visabilityOn from "@public/visability-on.png"
// import box from "@public/box.png"
// import boxChecked from "@public/box-checked.png"
import { useForm, Controller } from "react-hook-form";
// import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import googleIcon from "../../../../public/google.svg"
import facebookIcon from "../../../../public/facebook.svg"
import { Link } from "react-router-dom"
import logoSrc from "../../../../public/logo-1.svg"
import visabilityIconSrc from "../../../../public/visibility-icon.svg"

interface ILogInInputvalues {
    email: string;
    password: string;
    showPassword: boolean;
    remember: boolean;
}

export default function LogIn() {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<ILogInInputvalues>({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [values, setValues] = useState<ILogInInputvalues>({
        email: "",
        password: "",
        showPassword: false,
        remember: false
    });

    // const login = useGoogleLogin({
    //     onSuccess: codeResponse => console.log(codeResponse),
    //     flow: 'auth-code',
    // });

    const onSubmit = (data: ILogInInputvalues) => {
        console.log("Form Data:", data);
    };

    const handleClickShowPassword = () => setValues({ ...values, showPassword: !values.showPassword });


    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleFacebookResponse = (response: unknown) => {
        console.log("Facebook Login Response:", response);
    };

    return <>
        <div className={`${styles.wrapper} ${styles["wrapper_sign-in"]}`}>
            <section className={`${styles.sign} ${styles.account_in}`}>
                <h1 className={styles.account__heading}>Log in</h1>

                <div style={{display: "flex", justifyContent: "space-between", columnGap: 16}}>
                <button onClick={() => {}} className={styles.account__button_2}><img src={googleIcon} alt="google-icon" /><span>Google</span></button>

                <FacebookLogin
                    appId="facebook_app_id"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={handleFacebookResponse}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className={styles.account__button_2}><img src={facebookIcon} alt="facebook-icon" /><span>Facebook</span></button>
                    )}
                />
                </div>

                <div className={styles["disconnector"]}>
                    <div className={styles["disconnector__line"]} />
                    <div className={styles["disconnector__title"] + ' ' + styles["account__item-label"]}>or</div>
                    <div className={styles["disconnector__line"]} />
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
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
                                rules={{ required: "Password is required.", minLength: { value: 6, message: "Password must be at least 6 characters." } }}
                                render={({ field }) => (
                                    <OutlinedInput
                                        {...field}
                                        type={values.showPassword ? 'text' : 'password'}
                                        fullWidth
                                        error={!!errors.password}
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

                    <div className={`${styles.account__item} ${styles["account__item-terms"]}`}>
                        <Link to={"/auth/forgot-password"} className={styles["account__item-terms_link"]}>Forgot password?</Link>
                    </div>

                    <button type="submit" className={styles.account__button} disabled={!isValid} style={{height: 44, background: "#ED805B", color: "#fff"}}>Continue</button>
                </form>

                <div className={styles["account__item-other-option"]}>Don't have an account? <Link to={"/auth/sign-up"} className={styles["account__item-terms_link"]}>Sign up </Link></div>
            </section>

            <div className={styles["circle-1"]}></div>
            <div className={styles["circle-2"]}></div>
            <div className={styles["circle-3"]}></div>
            <div className={styles["circle-4"]}></div>

            <img src={logoSrc} alt="BB promise logo" className={styles["bb-logo"]} />
        </div>
    </>
}