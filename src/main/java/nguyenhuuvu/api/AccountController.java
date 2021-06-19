package nguyenhuuvu.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import nguyenhuuvu.dto.AccountDTO;
import nguyenhuuvu.model.Account;
import nguyenhuuvu.model.Mail;
import nguyenhuuvu.service.AccountService;
import nguyenhuuvu.service.EmailSenderService;
import nguyenhuuvu.utils.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.io.IOException;
import java.net.URI;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping(path = {"/api/v1/accounts"})
@CrossOrigin("*")
@AllArgsConstructor
public class AccountController {
    final AccountService accountService;
    final EmailSenderService emailSenderService;

    @PostMapping
    public ResponseEntity<?> signInAccount(@Valid @RequestBody Account account) throws MessagingException, IOException {
        // save account
        account = accountService.signUpAccount(account);

        // send mail verify
        Mail mail = emailSenderService.createMailVerify(account);
        emailSenderService.sendEmail(mail);

        return new ResponseEntity<>(
                AccountDTO
                        .builder()
                        .withUsername(account.getUsername())
                        .withEmail(account.getEmail())
                        .withFullname(account.getFullname())
                        .withGender(account.getGender())
                        .withBirthday(account.getBirthday())
                        .withAddress(account.getAddress())
                        .build(),
                HttpStatus.OK);
    }



}
